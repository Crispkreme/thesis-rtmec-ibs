<?php

namespace App\Http\Controllers\Api\Tenant;

use App\Http\Controllers\Controller;
use App\Models\TenantPayment;
use Illuminate\Http\Request;
use Srmklive\PayPal\Services\PayPal as PayPalClient;

class TenantPaypalController extends Controller
{
    public function paypal(Request $request)
    {
        dd('paypal');

        $provider = new PayPalClient;
        $provider->setApiCredentials(config('paypal'));
        $provider->getAccessToken();
        $response = $provider->createOrder([
            'intent' => 'CAPTURE',
            'application_context' => [
                'return_url' => route('api.tenant.sample.payment.success'),
                'cancel_url' => route('api.tenant.sample.payment.cancel')
            ],
            'purchase_units' => [
                [
                    'amount' => [
                        'currency_code' => 'USD',
                        'value' => $request->price,
                    ]
                ]
            ]
        ]);
        // dd('response', $response);

        if(isset($response['id']) && $response['id'] != null) {
            foreach($response['links'] as $link) {
                if($link['rel'] === 'approve') {
                    session()->put('product_name', $request->product_name);
                    session()->put('quantity', $request->quantity);
                    return redirect()->away($link['href']);
                }
            }
        } else {
            return redirect()->route('api.tenant.sample.payment.cancel');
        }
    }

    public function success(Request $request)
    {
        $provider = new PayPalClient;
        $provider->setApiCredentials(config('paypal'));
        $provider->getAccessToken();

        $response = $provider->capturePaymentOrder($request->token);

        if(isset($response['status']) && $response['status'] == 'COMPLETED') {
            $payment = new TenantPayment();
            $payment->payment_id = $response['id'];
            $payment->product_name = session()->get('product_name');
            $payment->quantity = session()->get('quantity');
            $payment->amount = $response['purchase_units'][0]['payments']['captures'][0]['amount']['value'];
            $payment->currency = $response['purchase_units'][0]['payments']['captures'][0]['amount']['currency_code'];
            $payment->payment_status = $response['status'];
            $payment->payment_method = 'Paypal';
            $payment->save();

            return 'Payment is successfully';

            unset($_SESSION['product_name']);
            unset($_SESSION['quantity']);
        } else {
            return redirect()->route('api.tenant.sample.payment.cancel');
        }
        dd($response);
    }

    public function cancel()
    {
        dd('cancel');
    }
}
