import Vue from 'vue';
import Main from './components/main';
import { Button, Checkbox, Collapse, CollapseItem, ColorPicker, Divider, Image, Input, InputNumber, Option, Row, Select, Slider, Switch } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-widget/src/theme/default.css';

Vue.use(Button);
Vue.use(Checkbox);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(ColorPicker);
Vue.use(Divider);
Vue.use(Image);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Option);
Vue.use(Row);
Vue.use(Select);
Vue.use(Slider);
Vue.use(Switch);

new Vue({
    el: '#editor',
    render: (h)=>h(Main)
})