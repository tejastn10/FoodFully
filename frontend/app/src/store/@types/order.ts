import { Errors } from ".";

export interface Order {
  _id: string;
  donation: any;
  Ngo: any;
  hotel: any;
}

export interface OrderState {
  isLoading: boolean;
  errors: Errors;
  order: Order | null;
}

export enum OrderActionTypes {
  ORDER_REQUEST = "@@donation/ORDER_REQUEST",
  ORDER_SUCCESS = "@@donation/ORDER_SUCCESS",
  ORDER_ERROR = "@@donation/ORDER_ERROR",
  CLEAR_ORDER = "@@auth/CLEAR_ORDER",
}
