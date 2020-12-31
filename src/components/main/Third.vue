<template>
  <v-app>
    <v-card width="100%" max-height="32%" height="32%" flat style="background: none">
      <!-- 여백 ...-->
    </v-card>
    <v-card width="100%" max-height="7%" height="7%" flat style="background: none;"  >
      <!--  이름 입력^^ -->
      <v-row no-gutters style="height: 100%">
        <v-spacer></v-spacer>
        <v-col cols="2" > <v-text-field label="이름(직급)" :rules="[rules.required]" v-model="emaildata.template_params.name" type="text"></v-text-field> </v-col>
        <v-col cols="2" >  </v-col>
        <v-col cols="2"  class="fill-height"> <v-text-field label="기업/단체명" :rules="[rules.required]" v-model="emaildata.template_params.company" type="text"></v-text-field> </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-card>
    <v-card width="100%" max-height="3%" height="3%" flat style="background: none;"></v-card>
    <v-card width="100%" max-height="7%" height="7%" flat style="background: none;">
      <v-row no-gutters style="height: 100%">
        <v-spacer></v-spacer>
        <v-col cols="2"> <v-text-field label="전화번호" :rules="[rules.required]" v-model="emaildata.template_params.phone" type="text"></v-text-field> </v-col>
        <v-col cols="2" >  </v-col>
        <v-col cols="2" class="fill-height"> <v-text-field label="이메일" :rules="[rules.required, rules.email]" v-model="emaildata.template_params.email" type="text"></v-text-field> </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-card>
    <v-card width="100%" max-height="3%" height="3%" flat style="background: none;"></v-card>
    <v-card width="50%" class="align-self-center" max-height="32%" height="32%" flat style="background: none;">
      <v-content class="align-center" style="height: 100%; padding-top: 0px">
        <v-textarea id="question" height="100%" :rules="[rules.required]" rows="6" v-model="emaildata.template_params.context"></v-textarea>
      </v-content>
    </v-card>
    <v-card width="50%" class="align-self-center" max-height="15%" height="15%" flat style="background: none;">
      <v-row no-gutters style="height: 100%">
        <v-img src="@/assets/main/chk.png" v-show="!this.checkBtn" style="margin-left: 3%; height: 60%;" contain max-width="3%" max-height="30%"></v-img>
        <v-img src="@/assets/main/chk_hover.png" v-show="this.checkBtn" style="margin-left: 3%; height: 60%;" contain max-width="3%" max-height="30%"></v-img>
        <v-img src="@/assets/main/txt.png" style="height: 60%; margin-left: 1%;" contain max-width="34%" max-height="30%"></v-img>
        <v-img src="@/assets/main/btn_view2.png" @click="viewPolicy" style="margin-left: 3%; height: 100%; cursor: pointer" contain max-width="8%" max-height="30%"></v-img>
        <v-spacer></v-spacer>
        <v-img src="@/assets/main/btn_Q.png" style="margin-top: 1%; height: 60%; cursor: pointer" @click="sendEmail" contain max-width="25%" max-height="100%"></v-img>
      </v-row>
    </v-card>
    <v-card width="100%" max-height="3%" height="3%" flat style="background: none;">
      <v-row style="height: 100%" no-gutters>
        <v-spacer></v-spacer>
        <v-col cols="1" style="height: 100%">
          <v-img src="@/assets/main/top.png" contain max-height="100%" >
          </v-img>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-card>
    <v-dialog v-model="dialog" :max-width="1100" v-show="viewPolicy">
      <v-card>
        <v-card-title>
          개인정보 보호정책 약관
          <v-spacer></v-spacer>
          <v-btn color="primary" icon dark @click="onClose">
            <v-icon>mdi-close-circle</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-card-subtitle>
            ■ 개인정보의 수집 및 이용 목적<br/>
            (주)UBCn은 개인정보를 다음과 같은 목적을 위해 활용합니다.<br/>
            - 마케팅 및 광고에 활용 : 신규 서비스(제품) 개발 및 특화, 자사 빙고제품 서비스 안내<br/>
            - 고객 관리 : 고객 서비스 이용에 따른 본인 확인, 개인 식별, 문의사항 처리, 추후 고지사항의 전달.<br/>
          </v-card-subtitle>
          <v-card-subtitle>
            ■ 수집하는 개인정보 항목<br/>
            (주)UBCn은 정보주체가 고개서비스(상담신청, 상담, 서비스 신청 등)를 이용하기 위하여 고객의 개인 정보를 제공할 때의 서비스 제공을 위한 필수 정보와, 보다 향상된 서비스 제공을 위한 선택정보를 온라인상 입력방법을 통하여 수집하고 있습니다. <br/>
            수집하는 개인정보의 범위는 아래와 같습니다.<br/>
            - 개인정보 수집항목 : 이름, 회사명, 전화번호, 이메일<br/>
          </v-card-subtitle>
          <v-card-subtitle>
            ■ 개인정보 수집방법<br/>
            - 정보주체는 웹사이트 또는 서면 절차를 통하여 개인정보처리방침과 이용약관 각각의 내용을 확인하고 ‘동의’ 또는 ‘동의하지 않는다’ 문구를 선택 할 수 있습니다. 정보 주체가 ‘동의’ 문구를 선택한 경우에는 개인정보 수집에 동의한 것으로 봅니다.<br/>
          </v-card-subtitle>
          <v-card-subtitle>
            ■ 동의를 거부할 권리 및 거부 시 불이익<br/>
            위 개인정보 중 필수적 정보의 수집/이용에 관한 동의는 계약의 체결 및 이행을 위하여 필수적이므로, 위 사항에 동의하셔야만 서비스의 제공이 가능합니다. <br/>
            위 개인정보 중 선택적 정보의 수집/이용에 관한 동의는 거부하실 수 있으며, 다만 동의하지 않으시는 경우 회원제 서비스의 이용에 대한 안내가 제한됩니다.<br/>
          </v-card-subtitle>
          <v-card-subtitle>
            ■ 개인정보의 보유 및 이용기간<br/>
            회사는 법령에 따른 개인정보 보유 이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유, 이용 기간 내에 한하여 개인정보를 보유 및 처리합니다.<br/>
            제공된 개인 정보 폐기를 요청하거나 개인정보의 수집 및 이용에 대한 동의를 철회하는 경우, 수집 및 이용목적이 달성되거나 보유 및 이용기간이 종료한 경우 해당 개인정보를 지체 없이 파기합니다.<br/>

            단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.<br/>

            가. 회사 내부 방침에 의한 정보보유 사유<br/>
            - 내 용 : 상담 관련 정보<br/>
            - 보존이유 : 고객에게 원활한 상담 서비스 제공<br/>
            - 보존기간 : 폐기 요청 시 까지<br/>
          </v-card-subtitle>
          <v-card-subtitle>
            ■ 개인정보의 파기절차 및 방법<br/>
            회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.<br/>

            파기절차<br/>
            회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기되어 집니다. <br/>
            별도 이메일로 수신받은 개인정보는 법률에 의한 경우가 아니고서는 보유 되어지는 이외의 다른 목적으로 이용되지 않습니다.<br/>

            파기방법<br/>
            - 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.<br/>
            - 이메일 내역에 대한 삭제.<br/>
          </v-card-subtitle>
          <v-card-subtitle>
            ■ 개인정보의 공유 및 제공<br/>
            회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.<br/>
            고객으로부터 수속 서비스 대행을 의뢰 받은 경우<br/>
            법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우<br/>
          </v-card-subtitle>
          <v-card-subtitle>
            ■ 이용자 및 법정대리인의 권리와 그 행사방법<br/>
            이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 내역 삭제를 요청할 수도 있습니다.<br/>
            귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다.<br/>
            회사는 이용자의 요청에 의해 해지 또는 삭제된 개인정보는 “회사가 수집하는 개인정보의 보유 및 이용기간”에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.<br/>
          </v-card-subtitle>
        </v-card-text>
        <v-card-text>
          <v-card-title>
            <v-spacer></v-spacer>
            <v-btn color="primary" icon dark @click="checkAgree">
              <v-img src="@/assets/main/btn_a.png" contain></v-img>
            </v-btn>
          </v-card-title>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import{ init } from 'emailjs-com';
import axios from 'axios'
init("user_yIyNcFF8djC4j2KFeDSit");
export default {
  name: "Third",
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
    dialog: false
  }),
  methods:{
    checkAgree(){
      this.checkBtn=true
      this.dialog=false
    },
    onClose(){
      this.dialog=false;
      console.log('Close...')
      console.log(this.dialog)
    },
    viewPolicy(){
      this.dialog=true;
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

</style>