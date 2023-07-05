import { StateSchema } from '../../Downloads/production-project-544bed01805b06c643ba9080f7b8fc3393f75fab/src/app/providers/StoreProvider';

export const getProfileValidateErrors = (state: StateSchema) => state.profile?.validateErrors;
