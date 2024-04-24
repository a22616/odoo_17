/** @odoo-module **/

import { Model } from "@web/model/model";


export class GanttModel extends Model {
    setup(params, services) {
        this.services = services;
        this.resModel = params.resModel
        this.params = params
        
    }
    
    async load(params) {
        console.log("While loading model");
    }
}
