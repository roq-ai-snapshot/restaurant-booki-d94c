import { RestaurantInterface } from 'interfaces/restaurant';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ReservationInterface {
  id?: string;
  guest_name: string;
  guest_count: number;
  reservation_date: any;
  reservation_time: any;
  restaurant_id: string;
  user_id: string;
  date_created?: any;
  date_updated?: any;
  created_at?: any;
  updated_at?: any;

  restaurant?: RestaurantInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ReservationGetQueryInterface extends GetQueryInterface {
  id?: string;
  guest_name?: string;
  restaurant_id?: string;
  user_id?: string;
}
