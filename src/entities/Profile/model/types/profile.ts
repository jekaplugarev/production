import { ValidateProfileError } from 'features/editableProfileCard/model/consts/consts';

export interface Profile {
    id?: string;
    first?: string;
    lastname?: string;
    age?: string;
    currency?: string;
    country?: string;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateError?: ValidateProfileError[];
}
