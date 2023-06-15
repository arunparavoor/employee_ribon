/** @odoo-module **/
import AbstractField from 'web.AbstractField';
import fieldRegistry from 'web.field_registry';
var core = require('web.core');
var _lt = core._lt;
var attendance_ribon = AbstractField.extend({
    description: _lt("Anniversary Info"),
    supportedFieldTypes: ['date', 'datetime'],

    /**
     * @override
     */
    init() {        
        this._super(...arguments);
        this.formatOptions.timezone = true;
    },   
    _renderReadonly() {

        var $item = this.$el;
        if (this.value === 'presence_present') {
            $item.append('<span class="badge badge-pill o_field_badge o_field_widget o_readonly_modifier bg-success-light" name="state">Present</span>');
        }else if(this.value === 'presence_absent'){
            $item.append('<span class="badge badge-pill o_field_badge o_field_widget o_readonly_modifier bg-danger-light" name="state">Absent</span>');
        }else if(this.value === 'presence_absent_active'){
            $item.append('<span class="badge badge-pill o_field_badge o_field_widget o_readonly_modifier bg-warning-light" name="state">Present(NA)</span>');
        }else{
            $item.append('<span class="badge badge-pill o_field_badge o_field_widget o_readonly_modifier bg-secondary-light" name="state">To define</span>');
        }
    }
});
fieldRegistry.add('attendance_ribon', attendance_ribon);
