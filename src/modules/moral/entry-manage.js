/**
 * Created by Lanxumit on 2017/8/3.
 */

import Vue from 'vue'
import EntryManage from './views/entry-manage.vue'
import 'src/assets/less/entry-manage.less';

new Vue({
  el:"#EntryManage",
  template:'<EntryManage/>',
  components:{EntryManage}
})
