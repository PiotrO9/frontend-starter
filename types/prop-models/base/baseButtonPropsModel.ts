import type { controlSizes } from '../enums/control-sizes';
import type { baseButtonTypes } from '../enums/base-button-types';

export default interface baseButtonPropsModel {
    label: string;
    buttonType: baseButtonTypes;
    size?: controlSizes;
    isLoading?: boolean;
    isDisable?: boolean;
    onClickFunction?: Function;
}
