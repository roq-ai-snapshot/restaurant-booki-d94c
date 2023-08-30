import { ChefInterface } from 'interfaces/chef';
import { GuestInterface } from 'interfaces/guest';
import { MenuInterface } from 'interfaces/menu';
import { ReservationInterface } from 'interfaces/reservation';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RestaurantInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  date_created?: any;
  date_updated?: any;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  chef?: ChefInterface[];
  guest?: GuestInterface[];
  menu?: MenuInterface[];
  reservation?: ReservationInterface[];
  user?: UserInterface;
  _count?: {
    chef?: number;
    guest?: number;
    menu?: number;
    reservation?: number;
  };
}

export interface RestaurantGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
