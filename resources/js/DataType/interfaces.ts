export enum RoomType {
    Single = 'single',
    Bedspacer = 'bedspacer',
}

export interface RoomData {
    id: number;
    room_number: string;
    room_type: RoomType;
    room_status: string;
    created_at: string;
    updated_at: string;
}