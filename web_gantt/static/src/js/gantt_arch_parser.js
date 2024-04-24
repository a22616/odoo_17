/** @odoo-module **/

import { visitXML } from "@web/core/utils/xml";

export class GanttArchParser {
    parse(arch, models, modelName) {
        var rawfield = []
        var columnfield = null
        var datefield = null
        var name = null
        var allfields = []
        var float_time = false
        visitXML(arch, (node) => {
            if (node.tagName === "grid_view") {
                name = node.getAttribute("name");
            }
            if (node.tagName === "field") {
                const widget = node.getAttribute("type");
            }
        })
        return {
            rawfield,
            columnfield,
            datefield,
            allfields,
            float_time,
            name
        }
    }
}
