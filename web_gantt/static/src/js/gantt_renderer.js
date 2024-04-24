/** @odoo-module **/

import { Component } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";



export class GanttRenderer extends Component {
    setup() {
        this.actionService = useService("action");
        this.input_value = null;
    }
  

}
GanttRenderer.template = "GanttRenderer";
