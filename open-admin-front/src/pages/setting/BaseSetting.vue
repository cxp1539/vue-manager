<template>
  <div class="account-settings-info-view">
    <a-row :gutter="16">
      <a-col :md="24" :lg="16">

        <a-form layout="vertical">

          <a-form-item
            label="用户名"
          >
            <a-input disabled="disabled" :value="currUser.username" />
          </a-form-item>

          <a-form-item
            label="昵称"
          >
            <a-input placeholder="给自己起个名字" v-model="name" />
          </a-form-item>

          <a-form-item>
            <a-button type="primary" @click="submit">提交</a-button>
          </a-form-item>
        </a-form>

      </a-col>
      <a-col :md="24" :lg="8" :style="{ minHeight: '180px' }">
        <div class="ant-upload-preview" @click="$refs.modal.edit(1)" >
          <a-icon type="cloud-upload-o" class="upload-icon"/>
          <div class="mask">
            <a-icon type="plus" />
          </div>
          <img :src="currUser.avatar"/>
        </div>
      </a-col>

    </a-row>

    <avatar-modal ref="modal" @ok="setAvatar"/>

  </div>
</template>

<script>
import AvatarModal from './AvatarModal'
import {mapState} from 'vuex'
import { setSysUserInfo } from '@/services/system'
import { mapMutations } from "vuex";
export default {
  components: {
    AvatarModal
  },
  data () {
    return {
      name: '',
    }
  },
  mounted() {
    this.name = this.currUser.name;
  },
  computed: {
    ...mapState("account", { currUser: "user" }),
  },
  methods: {
    ...mapMutations("account", ["setUser"]),
    setAvatar (url) {
      let user = this.currUser;
      user.avatar = url;
      this.setUser(user);
    },
    submit(){
      if(this.name == ''){
        this.$message.error("昵称必填！");
        return false;
      }

      setSysUserInfo({name:this.name}).then(res => {
        if(res.code == 200){
          this.$message.success('修改成功!');
        }else{
          this.$message.error(res.message);
        }
      });

    }
  }
}
</script>

<style lang="less" scoped>

  .avatar-upload-wrapper {
    height: 200px;
    width: 100%;
  }

  .ant-upload-preview {
    position: relative;
    margin: 0 auto;
    max-width: 180px;
    height: 180px;
    border-radius: 50%;
    box-shadow: 0 0 4px #ccc;

    .upload-icon {
      position: absolute;
      top: 0;
      right: 10px;
      font-size: 1.4rem;
      padding: 0.5rem;
      background: rgba(222, 221, 221, 0.7);
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }
    .mask {
      opacity: 0;
      position: absolute;
      background: rgba(0,0,0,0.4);
      cursor: pointer;
      transition: opacity 0.4s;

      &:hover {
        opacity: 1;
      }

      i {
        font-size: 2rem;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -1rem;
        margin-top: -1rem;
        color: #d6d6d6;
      }
    }

    img, .mask {
      width: 100%;
      max-width: 180px;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
    }
  }
</style>
