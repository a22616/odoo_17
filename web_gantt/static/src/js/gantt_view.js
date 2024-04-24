/** @odoo-module **/

import { registry } from "@web/core/registry";
import { GanttRenderer } from "./gantt_renderer";
import { GanttController } from "./gantt_controller";
import { GanttModel } from "./gantt_model";
import { GanttArchParser } from "./gantt_arch_parser";

export const GanttView = {
    type: "gantt",
    display_name: "Gantt View",
    icon: "fa-tasks",
    multiRecord: true,
    searchMenuTypes: ["filter","favorite","groupBy"],

    ArchParser: GanttArchParser,
    Controller: GanttController,
    Model: GanttModel,
    Renderer: GanttRenderer,

    props: (props, view) => {
        const { ArchParser } = view;
        const { arch, relatedModels, resModel } = props;
        const archInfo = new ArchParser().parse(arch, relatedModels, resModel);
        return {
            ...props,
            Model: view.Model,
            Renderer: view.Renderer,
            record:{},
            archInfo,
        };
    },

}

registry.category("views").add("gantt", GanttView);
