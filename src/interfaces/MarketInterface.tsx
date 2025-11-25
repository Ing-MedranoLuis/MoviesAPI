export interface MarketData {
    pagination: Pagination;
    data:       Market[];
}

export interface Market {
    open:           number;
    high:           number;
    low:            number;
    close:          number;
    volume:         number;
    adj_high:       number;
    adj_low:        number;
    adj_close:      number;
    adj_open:       number;
    adj_volume:     number;
    split_factor:   number;
    dividend:       number;
    // name:           Name;
    // exchange_code:  ExchangeCode;
   asset_type:     AssetType;
    // price_currency: PriceCurrency;
    // symbol:         Symbol;
    // exchange:       Exchange;
    date:           string;
}

 export type AssetType ="Stock"
     


// export enum Exchange {
//     Xnas = "XNAS",
// }

// export enum ExchangeCode {
//     Nasdaq = "NASDAQ",
// }

// export enum Name {
//     AppleInc = "Apple Inc",
// }

// export enum PriceCurrency {
//     Usd = "USD",
// }

// export enum Symbol {
//     Aapl = "AAPL",
// }

export interface Pagination {
    limit:  number;
    offset: number;
    count:  number;
    total:  number;
}
