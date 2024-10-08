/* @odoo-module */

import { registry } from "@web/core/registry";
const { Component,useState,onWillUpdateProps } = owl;

export class ks_gantt_color_picker extends Component {
    setup() {
    }
    get ks_gantt_color_picker(){
        return this.props.record.data[this.props.name]
    }
        _ClickColor(ev){
            this.props.record.update({ [this.props.name]: ev.target.value })
         }
};
ks_gantt_color_picker.template = 'ks_gantt_color_picker';
export const color_component = {component:ks_gantt_color_picker}
registry.category("fields").add("ks_gantt_color_picker", color_component);
