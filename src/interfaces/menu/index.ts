import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface MenuInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  category: string;
  restaurant_id: string;
  date_created?: any;
  date_updated?: any;
  created_at?: any;
  updated_at?: any;

  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface MenuGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  category?: string;
  restaurant_id?: string;
}
