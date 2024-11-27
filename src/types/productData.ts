export default interface ProductData {
  id: number;
  image: string;
  brand: string;
  name: string;
  isBestSeller: boolean;
  rating: number;
  reviewCount: number;
  discountRate: number;
  price: number;
  isFreeDelivery: boolean;
  deliveryDate: string;
  freeDeliveryStandard: number;
  isInCart: boolean;
}
