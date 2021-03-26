export interface HAULAGE_PRICE_REQUEST {
  DepartureStationId: number;
  DestinationStationId: number;
  Haulageid: number;
}

export interface WAYBILL_PAYMENT_LOG_REQUEST {
  VehicleType: string;
  ReceiverStationId: number;
  SenderStationId: number;
  PreShipmentItems: PRESHIPMENT_ITEM[];
  SenderLocation: Location;
  ReceiverLocation: Location;
  UserId: string;
}

export interface GET_PRICE_REQUEST {
  VehicleType: string;
  ReceiverStationId: number;
  SenderStationId: number;
  PreShipmentItems: PRESHIPMENT_ITEM[];
  SenderLocation: Location;
  ReceiverLocation: Location;
  UserId: string;
}

export interface SHIPMENT_REQUEST {
  HaulageId: number;
  CountryName: string;
  VehicleType: string;
  ReceiverStationId: number;
  ReceiverLocation: Location;
  ReceiverName: string;
  ReceiverAddress: string;
  ReceiverPhoneNumber: string;
  SenderStationId: string | number;
  SenderLocation: Location;
  SenderName: string;
  SenderAddress: string;
  SenderPhoneNumber: string;
  PreShipmentItems: PRESHIPMENT_ITEM[];
  CustomerCode: string;
  UserId: string;
  IsScheduled: false;
  ScheduledDate: null;
}

export interface DROPOFF_REQUEST {
  ReceiverStationId: number;
  SenderStationId: number;
  PreShipmentItems: PRESHIPMENT_ITEM[];
  UserId: string;
  isHomeDelivery: boolean;
}

export interface CREATE_DROPOFF_REQUEST {
  SenderName: string;
  SenderPhoneNumber: string;
  SenderCity: string;
  ReceiverName: string;
  ReceiverPhoneNumber: string;
  ReceiverAddress: string;
  ReceiverCity: string;
  PickupOptions: string;
  DepartureStationId: number;
  DestinationStationId: number;
  TempCode: string;
  PreShipmentItems: PRESHIPMENT_ITEM[];
  LGA: string;
}

export interface CREATE_INTL_SHIPMENT_REQUEST {
  CustomerType: string;
  DeliveryOptionId: string;
  PaymentMethod: string;
  PickupOptions: string;
  ReceiverAddress: string;
  ReceiverCity: string;
  ReceiverCountry: string;
  ReceiverEmail: string;
  ReceiverName: string;
  ReceiverPhoneNumber: string;
  SenderAddress: string;
  SenderState: string;
  ShipmentRequestItems: INTL_PRESHIPMENT_ITEM[];
  StationId: number;
  UserId: string;
  Value: number;
  ApproximateItemsWeight: number;
  DestinationServiceCentreId: number;
  DestinationCountryId: number;
  ReceiverState: string;
  Consolidated: boolean;
  RequestProcessingCountryId: number;
}

interface Location {
  Latitude: number;
  Longitude: number;
}

interface PRESHIPMENT_ITEM {
  ItemName: string;
  Description: string;
  ItemType: string;
  Quantity: number;
  Value: number;
  Weight: number;
  WeightRange: number;
  ImageUrl: string;
  ShipmentType: string;
  SpecialPackageId: number;
}

interface INTL_PRESHIPMENT_ITEM {
  ItemName: string;
  Description: string;
  ItemType: string;
  Quantity: number;
  Value: number;
  Weight: number;
  WeightRange: number;
  ImageUrl: string;
  ShipmentType: string;
  SpecialPackageId: number;
  StoreName: string;
  ShipmentItemId: number;
  Nature: string;
  TrackingID: string;
  requiresInsurance: boolean;
  itemValue: number;
  itemSenderfullName: string;
}
