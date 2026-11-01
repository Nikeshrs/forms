import { Injectable, Service } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class Serve {
    header():string{
        return "Hello👋 your all input values"
    }

    footer():string{
        return "Thank you🙏"
    }
}
