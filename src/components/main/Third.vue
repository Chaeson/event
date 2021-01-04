<template>
  <v-main class="fill-height ml-auto mr-auto" fluid :style="{ padding: '0px'}">
    <div class="questionFirst">
      <v-text-field class="name" label="이름(직급)" :rules="[rules.required]" v-model="emaildata.template_params.name" type="text"></v-text-field>
      <v-text-field class="company" label="기업/단체명" :rules="[rules.required]" v-model="emaildata.template_params.company" type="text"></v-text-field>
    </div>
    <div class="questionSecond">
      <v-text-field class="phone" label="연락처" :rules="[rules.required]" v-model="emaildata.template_params.phone" type="text"></v-text-field>
      <v-text-field class="email" label="이메일" :rules="[rules.required, rules.email]" v-model="emaildata.template_params.email" type="text"></v-text-field>
    </div>
    <div class="questionThird">
      <v-textarea class="context" id="question" height="100%" :rules="[rules.required]" rows="7" v-model="emaildata.template_params.context"></v-textarea>
    </div>
    <div class="questionForth">
      <v-img class="checkBtn" v-show="!this.checkBtn"></v-img>
      <v-img class="checkHover" v-show="this.checkBtn"></v-img>
      <v-img class="policyTxt"></v-img>
      <v-img class="policyDetail" @click="viewPolicy"></v-img>
      <v-img class="btnQuestion"></v-img>
    </div>
    <v-easy-dialog v-model="dialog" persistent >
      <div class="flex flex-col">
        <Policy @check-agree="checkAgree"/>
      </div>
    </v-easy-dialog>
  </v-main>
</template>

<script>
import{ init } from 'emailjs-com';
import axios from 'axios';
import VEasyDialog from 'v-easy-dialog';

init("user_yIyNcFF8djC4j2KFeDSit");
export default {
  name: "Third",
  components:{
    Policy:()=>import('@/components/main/Policy'),
    VEasyDialog
  },
  data:()=>({
    checkBtn:false,
    rules:{
      required: value => !!value || '필수값 입니다.',
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || '유효한 이메일형식이 아닙니다.'
      }
    },
    emaildata:{
      service_id:'service_nzg8z9i',
      template_id:'template_5s4cvmn',
      user_id:'user_yIyNcFF8djC4j2KFeDSit',
      template_params: {
        company: '',
        phone: '',
        name: '',
        email: '',
        context:''
      }
    },
    dialog: false,
    view:''
  }),
  methods:{
    checkAgree(menu){
      if(menu=='Close'){
        this.checkBtn=false;
        this.dialog=false;
      }else{
        this.checkBtn=true;
        this.dialog=false;
      }
    },
    viewPolicy(){
      this.dialog=true
    },
    validCheck(){
      if(this.emaildata.template_params.email=='') {
        alert('회신을 위해 이메일 입력은 필수 입니다.')
        //this.failMsg='회신을 위해 이메일 입력은 필수 입니다.'
        return false;
      }
      else if(this.emaildata.template_params.name==''){
        alert('원할한 소통을 위해 이름을 입력해주세요')
        return false;
      }else if(this.emaildata.template_params.context==''){
        alert('문의 내용이 입력되지 않았습니다!')
        return false;
      }else if(this.checkBtn==false){
        alert('약관 동의없이 문의메일 전송이 불가능 합니다.')
        return false;
      }
      return true;
    },
    sendEmail(){
      if(!this.validCheck()){
        return
      }
      axios({
        method:'POST',
        url:'https://api.emailjs.com/api/v1.0/email/send',
        data:JSON.stringify(this.emaildata),
        headers:{
          "Content-Type":'application/json'
        }
      }).then(result=>{
        console.log(result+'Success')
        alert('메일 전송 완료됐습니다. 잠시만 기다려주세요.')
      }).catch(error=>{
        console.log(error)
        alert('메일 전송 중 오류가 발생됐습니다. 잠시후 다시 시도해주세요')
      })
    }
  }
}
</script>

<style scoped>
.name, .company, .phone, .email {
  display: inline;
  width: 15%;
}
.company, .email{
  margin-left: 16%;
}
.context{
  width: 40%;
}
.questionFirst div , .questionSecond div{
  width: 22%;
  display: inline-block;
}
.questionFirst div{
  margin-top: 18%;
}
.questionFirst, .questionSecond ,.questionThird, .questionForth{
  margin-left: 30%;
}
.questionThird{
  width: 100%;
  margin-left: 31%;
}
.questionForth{
  margin-top: 2%;
  height: 10%;
}
.checkBtn, .checkHover{
  background: url('http://pamphlet.ubcn.co.kr/image/main/chk.png') no-repeat center center;
  background-size: contain;
  max-width: 22px;
  min-width: 22px;
  max-height: 22px;
  min-height: 22px;

}
.checkHover{
  background: url('http://pamphlet.ubcn.co.kr/image/main/chk_hover.png') no-repeat center center;
}
.questionForth div{
  display: inline-block;
  background-size: contain;
}
.policyTxt{
  background: url('http://pamphlet.ubcn.co.kr/image/main/txt.png') no-repeat center center;
  width: 300px;
  background-size: contain;
  height: 22px;
  display: inline-block;
  margin-left: 1%;
}
.policyDetail{
  background: url('http://pamphlet.ubcn.co.kr/image/main/btn_view2.png') no-repeat center center;
  background-size: contain;
  width: 70px;
  height: 22px;
  margin-left: 1%;
  cursor: pointer;
}
.btnQuestion{
  background: url('http://pamphlet.ubcn.co.kr/image/main/btn_Q.png') no-repeat center center;
  background-size: contain;
  width: 180px;
  height: 75px;
  margin-left: 10%;
  position: fixed;
}
</style>