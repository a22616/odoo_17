/** @odoo-module **/

import { Component } from "@odoo/owl";
import { useModel } from "@web/model/model";
import { useService } from "@web/core/utils/hooks";
import { Dropdown } from "@web/core/dropdown/dropdown";
import { DropdownItem } from "@web/core/dropdown/dropdown_item";
import { ControlPanel } from "@web/search/control_panel/control_panel";


export class GanttController extends Component {
    setup() {
        this.orm = useService("orm");
        this.model = useModel(this.props.Model, {
            ...this.props.archInfo,
            resModel: this.props.resModel,
            domain: this.props.domain,
            fields: this.props.fields,
        });
    }
}
GanttController.components = {
    Dropdown,
    DropdownItem,
    ControlPanel
};
GanttController.template = "GanttController";
