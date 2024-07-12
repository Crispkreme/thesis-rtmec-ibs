<?php

namespace App\Http\Requests;

use App\Models\Room;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class RoomUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
    **/
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
    **/
    public function rules(): array
    {
        return [
            'room_number' => [
                'required', 'string', 'max:255',
                Rule::unique('rooms'), 
            ],
            'room_type' => 'nullable|string|in:single,bedspacer',
            'room_status' => 'nullable|string|in:available,occupied',
            'occupants' => 'integer',
            'occupant_status' => 'nullable|string|in:complete,incomplete',
        ];
    }
}
