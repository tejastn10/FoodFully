import { Errors, User } from ".";
import { Donation } from "./donation";
import { Order } from "./order";

interface Message {
  message: string | null;
}

export interface AdminState {
  isLoading: boolean;
  errors: Errors;
  messages: Message;
  users: User[] | null;
  orders: Order[] | null;
  donations: Donation[] | null;
}

export enum AdminActionTypes {
  USER_LIST_REQUEST = "@@admin/USER_LIST_REQUEST",
  USER_LIST_SUCCESS = "@@admin/USER_LIST_SUCCESS",
  USER_LIST_ERROR = "@@admin/USER_LIST_ERROR",
  USER_DELETE_REQUEST = "@@admin/USER_DELETE_REQUEST",
  USER_DELETE_SUCCESS = "@@admin/USER_DELETE_SUCCESS",
  USER_DELETE_ERROR = "@@admin/USER_DELETE_ERROR",
  UPDATE_PRIVILEGE_REQUEST = "@@admin/UPDATE_PRIVILEGE_REQUEST",
  UPDATE_PRIVILEGE_SUCCESS = "@@admin/UPDATE_PRIVILEGE_SUCCESS",
  UPDATE_PRIVILEGE_ERROR = "@@admin/UPDATE_PRIVILEGE_ERROR",
  ORDER_LIST_REQUEST = "@@admin/ORDER_LIST_REQUEST",
  ORDER_LIST_SUCCESS = "@@admin/ORDER_LIST_SUCCESS",
  ORDER_LIST_ERROR = "@@admin/ORDER_LIST_ERROR",
  UPDATE_ORDER_REQUEST = "@@admin/UPDATE_ORDER_REQUEST",
  UPDATE_ORDER_SUCCESS = "@@admin/UPDATE_ORDER_SUCCESS",
  UPDATE_ORDER_ERROR = "@@admin/UPDATE_ORDER_ERROR",
  DONATION_LIST_REQUEST = "@@admin/DONATION_LIST_REQUEST",
  DONATION_LIST_SUCCESS = "@@admin/DONATION_LIST_SUCCESS",
  DONATION_LIST_ERROR = "@@admin/DONATION_LIST_ERROR",
  CLEAR_ADMIN_STATE = "@@admin/CLEAR_ADMIN_STATE",
  CLEAR_ADMIN_ERROR = "@@admin/CLEAR_ADMIN_ERROR",
}
