<template>
  <t-row :gutter="16">
    <t-col :span="8" offset="2">
        <t-config-provider :global-config="{ classPrefix: 't' }">
        <t-space direction="vertical" style="width: 100%; text-align: center">
            <h1>TDesign <span class="text-color-red">UnoCss 示例</span></h1>
          <h3 class="b-bttom-2 b-b-dotted border-color-success">Welcome to use TDesign！</h3>
          <div>
            <h2>颜色</h2>
            <div>
                <div>背景</div>
                <div class="flex">
                <div class="h-100px w-100px bg-brand">bg-brand</div>
                <div class="h-100px w-100px bg-gray">bg-gray</div>
                <div class="h-100px w-100px bg-success">bg-success</div>
                <div class="h-100px w-100px bg-error">bg-error</div>
                <div class="h-100px w-100px bg-brand-5">bg-brand-5</div>
                <div class="h-100px w-100px bg-gray-9">bg-gray-9</div>
                </div>
                <div>字体颜色</div>
                <div class="flex">
                <div class="h-100px w-100px color-brand">color-brand</div>
                <div class="h-100px w-100px color-gray">color-gray</div>
                <div class="h-100px w-100px color-success">color-success</div>
                <div class="h-100px w-100px color-error">color-error</div>
                <div class="h-100px w-100px text-color-brand-5">text-color-brand-5</div>
                <div class="h-100px w-100px text-color-gray-9">text-color-gray-9</div>
                </div>
            </div>
            <h2>边框</h2>
            <div>
                <div>边框颜色</div>
                <div class="flex">
                <div class="m-4 b-5px border-solid border-color-success">border-color-success</div>
                <div class="m-4 b-5px border-solid border-x-color-blue">border-x-color-blue</div>
                <div class="m-4 b-5px border-solid border-block-color-success-8">border-block-color-gray-10</div>
                <div class="m-4 b-5px border-solid border-x-brand">border-x-brand</div>
                </div>
                <div>边框大小</div>
                <div class="flex overflow-auto">
                <div>
                    border-size-1
                    <div class="m-2 w-120px b-5px border-solid border-size-1"></div>
                </div>
                <div>
                    border-size-2
                    <div class="m-2 w-120px b-5px border-solid border-size-2"></div>
                </div>
                <div>
                    border-size-3
                    <div class="m-2 w-120px b-5px border-solid border-size-3"></div>
                </div>
                <div>
                    border-size-4
                    <div class="m-2 w-120px b-5px border-solid border-size-4"></div>
                </div>
                <div>
                    border-size-5
                    <div class="m-2 w-120px b-5px border-solid border-size-5"></div>
                </div>
                <div>
                    border-size-6
                    <div class="m-2 w-120px b-5px border-solid border-size-6"></div>
                </div>
                <div>
                    border-size-7
                    <div class="m-2 w-120px b-5px border-solid border-size-7"></div>
                </div>
                <div>
                    border-size-8
                    <div class="m-2 w-120px b-5px border-solid border-size-8"></div>
                </div>
                <div>
                    border-size-9
                    <div class="m-2 w-120px b-5px border-solid border-size-9"></div>
                </div>
                <div>
                    border-size-10
                    <div class="m-2 w-120px b-5px border-solid border-size-10"></div>
                </div>
                <div>
                    border-size-11
                    <div class="m-2 w-120px b-5px border-solid border-size-11"></div>
                </div>
                <div>
                    border-size-12
                    <div class="m-2 w-120px b-5px border-solid border-size-12"></div>
                </div>
                <div>
                    border-size-13
                    <div class="m-2 w-120px b-5px border-solid border-size-13"></div>
                </div>
                <div>
                    border-size-14
                    <div class="m-2 w-120px b-5px border-solid border-size-14"></div>
                </div>
                <div>
                    border-size-15
                    <div class="m-2 w-120px b-5px border-solid border-size-15"></div>
                </div>
                <div>
                    border-size-16
                    <div class="m-2 w-120px b-5px border-solid border-size-16"></div>
                </div>
                </div>
            </div>
            <br />
            <h2>大小</h2>
            <div>
                <div class="bg-success size-min-10">size-min-2</div>
                <br />
                <div class="bg-success size-min-inherit">size-min-2</div>
                <br />
                <div class="bg-success size-w-16 size-h-16">size-w-16 size-h-16</div>
            </div>
            <h2>内边距</h2>
            <div>
                <div class="bg-brand p-10">p-10</div>
                <br />
                <div class="bg-brand pa-10">pa-5</div>
                <br />
                <div class="bg-brand p-y-10">p-y-10</div>
                <br />
                <div class="bg-brand p-x-10">p-y-10</div>
                <br />
                <div class="bg-brand p-l-10">p-l-10</div>
                <br />
                <div class="bg-brand p-b-10">p-b-10</div>
                <br />
                <div class="bg-brand p-t-10">p-top-10</div>
            </div>
            <h2>外边距</h2>
            <div>
                <div class="bg-brand m-10">m-10</div>
                <br />
                <div class="bg-brand ma-10">ma-5</div>
                <br />
                <div class="bg-brand m-y-8">m-y-8</div>
                <br />
                <div class="bg-brand m-x-10">m-y-10</div>
                <br />
                <div class="bg-brand m-l-10">m-l-10</div>
                <br />
                <div class="bg-brand m-b-10">m-b-10</div>
                <br />
                <div class="bg-brand m-t-8">m-t-8</div>
            </div>
            <h2>阴影</h2>
            <div>
                <div class="m-8 shadow-1">shadow-1</div>
                <div class="m-8 shadow-2">shadow-2</div>
                <div class="m-8 shadow-3">shadow-3</div>
            </div>
            <h2>圆角</h2>
            <div>
                <div class="m-8 size-w-16 size-h-16 bg-success radius-small">radius-small</div>
                <div class="m-8 size-w-16 size-h-16 bg-success radius-medium">radius-medium</div>
                <div class="m-8 size-w-16 size-h-16 bg-success radius-large">radius-large</div>
                <div class="m-8 size-w-16 size-h-16 bg-success radius-extraLarge">radius-extraLarge</div>
                <div class="m-8 size-w-16 size-h-16 bg-success radius-circle">radius-circle</div>
            </div>
            <h2>行高</h2>
            <div>
                <div class="font-line-height-4">font-line-height-4</div>
                <div class="line-height-10">line-height-10</div>
                <div class="line-height-20px">line-height-20px</div>
            </div>
          </div>
          <t-space>
            <t-button theme="primary">
              <add-icon />
              新建
            </t-button>
            <t-button variant="outline">
              <cloud-upload-icon />
              上传文件
            </t-button>
            <t-button shape="circle" theme="primary">
              <discount-icon />
            </t-button>
            <t-button shape="circle" theme="primary">
              <cloud-download-icon />
            </t-button>
            <t-button variant="outline"> 搜索 </t-button>
          </t-space>
        </t-space>
      </t-config-provider>
    </t-col>
  </t-row>
</template>

<script setup lang="ts">
import {
  AddIcon,
  CloudUploadIcon,
  DiscountIcon,
  CloudDownloadIcon,
} from "tdesign-icons-vue-next";
</script>
