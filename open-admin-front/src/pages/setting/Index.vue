<template>
  <div class="page-header-index-wide">
    <a-card
      :bordered="false"
      :bodyStyle="{ padding: '16px 0', height: '100%' }"
      :style="{ minHeight: '560px' }"
    >
      <div class="account-settings-info-main" :class="isMobile ? 'mobile' : ''">
        <div class="account-settings-info-left">
          <a-menu
            :mode="isMobile ? 'horizontal' : 'inline'"
            :style="{ border: '0', width: isMobile ? '560px' : 'auto' }"
            :selectedKeys="selectedKeys"
            type="inner"
            @openChange="onOpenChange"
          >
            <a-menu-item key="/setting/base">
              <router-link :to="{ path: '/setting/base' }">
                基本设置
              </router-link>
            </a-menu-item>
            <a-menu-item key="/setting/security">
              <router-link :to="{ path: '/setting/security' }">
                安全设置
              </router-link>
            </a-menu-item>
            <a-menu-item key="/setting/custom">
              <router-link :to="{ path: '/setting/custom' }">
                个性化
              </router-link>
            </a-menu-item>
          </a-menu>
        </div>
        <div class="account-settings-info-right">
          <div class="account-settings-info-title">
            <span>{{ $route.name }}</span>
          </div>
          <router-view :style="{ minHeight: '560px' }" />
        </div>
      </div>
    </a-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      // horizontal  inline
      mode: "inline",

      openKeys: [],
      selectedKeys: [],

      // cropper
      preview: {},
      option: {
        info: true,
        size: 1,
        outputType: "jpeg",
        canScale: false,
        autoCrop: true,
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: 180,
        autoCropHeight: 180,
        fixedBox: true,
        // 开启宽度和高度比例
        fixed: true,
        fixedNumber: [1, 1],
      },

      pageTitle: "",
    };
  },
  computed: {
    ...mapState("setting", ["isMobile"]),
  },
  created() {
    this.updateMenu();
  },
  methods: {
    onOpenChange(openKeys) {
      this.openKeys = openKeys;
    },
    updateMenu() {
      const routes = this.$route.matched.concat();
      this.selectedKeys = [routes.pop().path];
    },
  },
  watch: {
    $route(val) {
      this.updateMenu();
    },
  },
};
</script>

<style lang="less" scoped>
.account-settings-info-main {
  width: 100%;
  display: flex;
  height: 100%;
  overflow: auto;

  &.mobile {
    display: block;

    .account-settings-info-left {
      border-right: unset;
      border-bottom: 1px solid #e8e8e8;
      width: 100%;
      height: 50px;
      overflow-x: auto;
      overflow-y: scroll;
    }
    .account-settings-info-right {
      padding: 20px 40px;
    }
  }

  .account-settings-info-left {
    border-right: 1px solid #e8e8e8;
    width: 224px;
  }

  .account-settings-info-right {
    flex: 1 1;
    padding: 8px 40px;

    .account-settings-info-title {
      color: rgba(0, 0, 0, 0.85);
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      margin-bottom: 12px;
    }
    .account-settings-info-view {
      padding-top: 12px;
    }
  }
}
</style>
