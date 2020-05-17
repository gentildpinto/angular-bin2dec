import { AbstractControl, ValidationErrors } from '@angular/forms';

export class BinaryNumberValidator {
    public static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    }

    public static cannotContainANonBinaryDigit(control: AbstractControl): ValidationErrors | null {
        if (control.value !== null) {
            const binaryNumber = (control.value as string).split('');
            const size = binaryNumber.length;
            for (let i = 0; i < size; i++) {
                if ((binaryNumber as unknown as number)[i] < 0 || (binaryNumber as unknown as number)[i] > 1) {
                    return { cannotContainANonBinaryDigit: true };
                }
            }
        }
        return null;
    }
}
