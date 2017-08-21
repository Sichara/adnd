import { Injectable, ViewContainerRef } from '@angular/core';
import { Toast, ToastsManager } from 'ng2-toastr/ng2-toastr';
import { bind } from 'bind-decorator';

@Injectable()
export class NotificationService {
    constructor(private toastr: ToastsManager) {}

    setContainerRef(vRef: ViewContainerRef): void {
        if (!vRef) {
            console.warn('Please provide ViewContainerRef using setContainerRef(vRef: ViewContainerRef) method.');
        }

        this.toastr.setRootViewContainerRef(vRef);
    }

    @bind
    error(message: any): void {
        // TODO add translations
        this.toastr.error(message.error, 'Error!', {showCloseButton: true, enableHTML: true})
            .then(this.preventDismiss);
    }

    @bind
    info(message: string): void {
        // TODO add translations
        this.toastr.info(message, 'Info', {showCloseButton: true});
    }

    @bind
    success(message: string): void {
        // TODO add translations
        this.toastr.success(message, 'Success!', {showCloseButton: true});
    }

    @bind
    warning(message: string): void {
        // TODO add translations
        this.toastr.warning(message, 'Warning!', {showCloseButton: true});
    }

    private preventDismiss(toast: Toast): void {
        if (toast.timeoutId) {
            clearTimeout(toast.timeoutId);
        }
    }
}
