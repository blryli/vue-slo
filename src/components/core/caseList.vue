<template>
  <ul class="row">
    <li class="col-xs-6 col-sm-4 recruit-box" :class="{'col-md-3': colFour}" style="float: right;margin-bottom: 30px;" v-if="recruitShow == true">
      <recruit :recruit-info="recruitInfo" :id="id"></recruit>
    </li>
    <li class="col-xs-6 col-sm-4" :class="{'col-md-3': colFour}" style="padding: 0" v-for="(item, index) in caseArr" :key="index">
      <ul class="slo-case o-h">
        <div class="img router" @click="updateCutId(item, index)"><img :src="item.img_min"></div>
        <div class="title router" @click="updateCutId(item, index)" :style="{ 'font-size': titleSize + 'px' }">
          <strong>{{item.title}}</strong><span></span><span :style="{ top: rowTop + 'px' }" v-if="textLength(item.title)"></span></div>
        <li class="text" v-if="showText">{{item.author}}</li>
      </ul>
    </li>
  </ul>
</template>

<script>
import Recruit from '@/components/works/recruit'
import {mapGetters} from 'Vuex'
export default {
    props: {
      caseArr: {},
      recruitInfo: {
        type: Array,
        default: function() {
          return []
        }
      },
      id: '',
      pathUrl: {
        type: String,
        default: '/particulars'
      },
      titleSize: {
        type: Number,
        default: function() {
          return document.body.scrollWidth < 768 ? 16 : 18
        }
      },
      rowTop: {
        type: Number,
        default: 34
      },
      showText: {
        type: Boolean,
        default: true
      },
      colFour: {
        type: Boolean,
        default: true
      },
      recruitShow: {
        type: Boolean,
        default: false
      }
    },
    components: {
      Recruit
    },
    computed: {
      ...mapGetters([
        'cutId'
      ])
    },
    methods:{
      updateCutId(item, index) {
        let arr = [],
          self = this;
        this.caseArr.forEach((d, i) => {
          arr.push(d.case_id);
        })
        const {href} = this.$router.resolve({
          path: self.pathUrl,
          query: {
            id: item.case_id,
            index:index
          }
        })
        window.open(href, '_blank')
        this.$store.commit('updateCutId', arr)
      },
      textLength(text) {
        if( document.body.scrollWidth < 768 ){
          if(text.length>11){
            return true
          }
        } else {
          if(text.length>16){
            return true
          }
        }
      }
    }
}

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
ul{
  margin-bottom: 0;
}
.o-h{
  overflow: hidden;
}
.recruit-box{
  padding-top: 10px;
  .works-recruit{
    background-color: #f2f2f2;
    padding: 30px 20px;
    height: 304px;
    .more{
      left: 20px;
    }
  }
}

.slo-case{
  max-width: 298px;
  background-color: #fff;
  margin: 0 6px 20px;
  &:hover{
    box-shadow: 0 4px 16px rgba(0,0,0,.2);
  }
}
.router{
  cursor: pointer;
}
.img{
  img{
    width: 100%;
    height: auto;
    &:hover{
      transition: filter .3s;
      filter: brightness(1.1) contrast(110%);
      -webkit-filter: brightness(1.1) contrast(110%);
    }
  }
}
.title{
  font-weight: bold;
  margin-top: 12px;
  height: 50px;
  max-width: 238px;
  color: #191919;
  strong{
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
}
.text{
  font-size: 14px;
  padding: 14px 0 16px;
  color: #555;
}
@media (min-width: 768px) { 
  .slo-case{
    padding: 10px 10px 0;
    margin: 0 1px 30px;
    &.m-b-20{
      margin-bottom: 20px;
    }
  }
  .title{
    margin-top: 20px;
  }
}
</style>