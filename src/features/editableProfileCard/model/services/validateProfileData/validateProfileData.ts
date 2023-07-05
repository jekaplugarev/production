import { Profile } from '../../Downloads/production-project-544bed01805b06c643ba9080f7b8fc3393f75fab/src/entities/Profile';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const {
        first, lastname, age, country,
    } = profile;

    const errors: ValidateProfileError[] = [];

    if (!first || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    return errors;
};
