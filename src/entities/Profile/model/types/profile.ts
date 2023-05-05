export interface Profile {
    first: string;
    lastname: string;
    age: string;
    currency: 'RUB' | 'USD' | 'EUR' | 'GBP';
    country: 'Russia' | 'United States' | 'Canada';
    city: string;
    username: string;
    avatar: string;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading?: boolean;
    error: string;
    readonly: boolean;
}
