export interface GetOrdersParams {
  context?: "view" | "edit";
  page?: number;
  per_page?: number;
  search?: string;
  after?: string;
  before?: string;
  modified_after?: string;
  modified_before?: string;
  dates_are_gmt?: boolean;
  exclude?: number[];
  include?: number[];
  offset?: number;
  order?: "asc" | "desc";
  orderby?: "date" | "modified" | "id" | "include" | "title" | "slug";
  parent?: number[];
  parent_exclude?: number[];
  status?: (
    | "any"
    | "pending"
    | "processing"
    | "on-hold"
    | "completed"
    | "cancelled"
    | "refunded"
    | "failed"
    | "trash"
  )[];
  customer?: number;
  product?: number;
  dp?: number;
}

export interface Order {
  id: number;
  parent_id: number;
  number: string;
  order_key: string;
  created_via: string;
  version: string;
  status: string;
  currency: string;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  discount_total: string;
  discount_tax: string;
  shipping_total: string;
  shipping_tax: string;
  cart_tax: string;
  total: string;
  total_tax: string;
  prices_include_tax: boolean;
  customer_id: number;
  customer_ip_address: string;
  customer_user_agent: string;
  customer_note: string;
  billing: {
    first_name: string;
    last_name: string;
    company: string;
    address_1: string;
    address_2: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
    email: string;
    phone: string;
  };
  shipping: {
    first_name: string;
    last_name: string;
    company: string;
    address_1: string;
    address_2: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
  };
  payment_method: string;
  payment_method_title: string;
  transaction_id: string;
  date_paid: string | null;
  date_paid_gmt: string | null;
  date_completed: string | null;
  date_completed_gmt: string | null;
  cart_hash: string;
  meta_data: Array<{
    id: number;
    key: string;
    value: string;
  }>;
  line_items: Array<{
    id: number;
    name: string;
    product_id: number;
    variation_id: number;
    quantity: number;
    tax_class: string;
    subtotal: string;
    subtotal_tax: string;
    total: string;
    total_tax: string;
    taxes: Array<{
      id: number;
      total: string;
      subtotal: string;
    }>;
    meta_data: Array<{
      id: number;
      key: string;
      value: string;
    }>;
    sku: string;
    price: number;
  }>;
  tax_lines: Array<{
    id: number;
    rate_code: string;
    rate_id: number;
    label: string;
    compound: boolean;
    tax_total: string;
    shipping_tax_total: string;
    meta_data: Array<any>;
  }>;
  shipping_lines: Array<{
    id: number;
    method_title: string;
    method_id: string;
    total: string;
    total_tax: string;
    taxes: Array<any>;
    meta_data: Array<{
      id: number;
      key: string;
      value: string;
    }>;
  }>;
  fee_lines: Array<any>;
  coupon_lines: Array<any>;
  refunds: Array<{
    id: number;
    refund: string;
    total: string;
  }>;
  _links: {
    self: Array<{
      href: string;
    }>;
    collection: Array<{
      href: string;
    }>;
    customer?: Array<{
      href: string;
    }>;
  };
}
