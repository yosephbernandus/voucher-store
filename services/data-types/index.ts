export interface CategoryTypes {
    _id: string;
    name: string;
    __v: number;

}

export interface GameItemTypes {
    _id: string;
    status: string;
    name: string;
    thumbnail: string;
    category: CategoryTypes;
}


export interface BankTypes {
    _id: string;
    name: string;
    bankName: string;
    noRekening: string;
}


export interface PaymentTypes {
    _id: string;
    status: string;
    type: string;
    banks: BankTypes[]
}

export interface NominalTypes {
    _id: string;
    coinQuantity: number;
    coinName: string;
    price: number;
}

export interface LoginTypes {
    email: string;
    password: string;
}

export interface RegisterTypes {
    name: string;
    email: string;
    password: string;
}

export interface UserTypes {
    id: string;
    avatar: string;
    email: string;
    name: string;
    username: string;
}

export interface JWTPayloadTypes {
    player: UserTypes;
    iat: number;
}

export interface CheckoutTypes {
    voucher: string;
    nominal: string;
    payment: string;
    bank: string;
    name:string;
    accountUser: string;
}

export interface HistoryVoucherTopupTypes {
    category: string;
    coinName: string;
    coinQuantity: number;
    gameName: string;
    price: number;
    thumbnail: string;
}

export interface HistoryTransactionTypes {
    _id: string;
    historyVoucherTopup: HistoryVoucherTopupTypes;
    value: number;
    status: string;
}

export interface TopUpCategoriesTypes {
    _id: string;
    name: string;
    value: number;
}