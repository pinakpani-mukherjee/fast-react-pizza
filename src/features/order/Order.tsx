// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utilities/helpers";
import { Pizza } from "../menu/MenuItem";

interface orderProp {
  id: string;
  customer: string;
  status: string;
  phone: string;
  address: string;
  priority: boolean;
  estimatedDelivery: string;
  cart: [Pizza];
  position: string;
  orderPrice: number;
  priorityPrice: number;
}

export const loader = async ({ params }: any) => {
  const order = await getOrder(params.orderId);
  return order;
};

const Order = () => {
  const {
    id,
    customer,
    status,
    phone,
    address,
    priority,
    estimatedDelivery,
    cart,
    position,
    orderPrice,
    priorityPrice,
  } = useLoaderData() as orderProp;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div>
      <div>
        <h2>Status</h2>

        <div>
          {priority && <span>Priority</span>}
          <span>{status} order</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
};

export default Order;
