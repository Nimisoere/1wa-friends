export interface Report_Issues {
  AppType: string;
  Body: string;
  UserDetails: {
    FirstName: string;
    LastName: string;
    PhoneNumber: string;
    Email: string;
  };
  ScreenShots1: string;
  ScreenShots2: string;
  ScreenShots3: string;
}

export interface RATING_REQUEST {
  Rating: 1 | 2 | 3 | 4 | 5;
  Comment: string;
  UserChannelType: string;
  Waybill: string;
}

export interface DATE_FILTER {
  StartDate: string;
  EndDate: string;
}
