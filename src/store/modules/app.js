import { Tools } from 'hanzi-mobile-package';

const app = {
  state: {
    is_init: true,
    is_btn: true,
    student_data: {},
    foot_type: null,
    is_class: true,  // 是否切换更新了班级 (首页，动态)
    user_data: {},
    user_type: 0,  //0|游客，1|家长，2|教师，3|院长
  },
  mutations: {
    BG_WHITE: (state, type) => {
      if(type){
        document.getElementsByTagName('html')[0].style.background = '#fff'
        document.body.style.background = '#fff'
      }else{
        document.getElementsByTagName('html')[0].style.background = '#F7F7F7'
        document.body.style.background = '#F7F7F7'
      }
    },
    TITLE: (state, value) => {
      document.title = value
    },
    USER_TYPE: (state, type) => {
      state.user_type = type
    },
    FOOT_TYPE: (state, value) => {
      state.foot_type = value
    },
    GET_STUDENT_DATA: (state) => {
      let ajaxData = {};

      if(state.user_type !== 1){
        return;
      }

      if(state.is_init){
          Tools.alert.loading();
          state.is_init = false;
      }

      Tools.ajax({
        url: '/api/user/student',
        ajaxData: ajaxData,
        successFun: function (res) {
            if(res){
                Tools.alert.closeLoading();
                state.is_btn = true;
                state.student_data = res.data;
            }
        },
        errorFun: function (error_data, status, headers, error_obj) {
            state.is_btn = true;
            Tools.alert.closeLoading();
            Tools.alert.error(error_data.error_msg);
        },
        type: 'GET'
      });
    },
    GET_USER_DATA: (state) => {
      let ajaxData = {};

      if(state.user_type !== 1){
        return;
      }

      Tools.alert.loading();

      Tools.ajax({
        url: '/api/user',
        ajaxData: ajaxData,
        successFun: function (res) {
            if(res){
                Tools.alert.closeLoading();
                state.user_data = res.data;
            }
        },
        errorFun: function (error_data, status, headers, error_obj) {
            Tools.alert.closeLoading();
            Tools.alert.error(error_data.error_msg);
        },
        type: 'GET'
      });
    },
  },
  actions: {
    title({ commit }, value) {
      commit('TITLE', value)
    },
    bgWhite({ commit }, type) {
      commit('GET_INFO', type)
    },
    footType({ commit }, value) {
      commit('FOOT_TYPE', value)
    },
    userType({ commit }, value) {
      commit('USER_TYPE', value)
    },
    getUserData({ commit }, value) {
      commit('GET_USER_DATA')
    },
    getStudentData({ commit }, value) {
      commit('GET_STUDENT_DATA')
    },
    change({ commit }) {

      let ajaxData = {};

      if(!app.state.is_btn){
          return;
      }

      app.state.is_btn = false;

      Tools.alert.loading();

      Tools.ajax({
          url: '/api/user/student_switch',
          ajaxData: ajaxData,
          successFun: function (res) {
              if(res){
                  commit('GET_STUDENT_DATA')
              }
          },
          errorFun: function (error_data, status, headers, error_obj) {
              Tools.alert.closeLoading();
              Tools.alert.error(error_data.error_msg);
          },
          type: 'GET'
      });
    }
  }
}

export default app
