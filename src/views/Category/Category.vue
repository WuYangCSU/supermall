<template>
  <div ref="wrapper">
    <scroll class="content">
      <ul>
        <button class="btn" @click="clickBtn">anniu</button>
        <li>hahaha1</li>
        <li>hahaha2</li>
        <li>hahaha3</li>
        <li>hahaha4</li>
        <li>hahaha5</li>
        <li>hahaha6</li>
        <li>hahaha7</li>
        <li>hahaha8</li>
        <li>hahaha9</li>
        <li>hahaha10</li>
        <li>hahaha11</li>
        <li>hahaha12</li>
        <li>hahaha13</li>
        <li>hahaha14</li>
        <li>hahaha15</li>
        <li>hahaha16</li>
        <li>hahaha17</li>
        <li>hahaha18</li>
        <li>hahaha19</li>
        <li>hahaha20</li>
        <li>hahaha21</li>
        <li>hahaha22</li>
        <li>hahaha23</li>
        <li>hahaha24</li>
        <li>hahaha25</li>
        <li>hahaha26</li>
        <li>hahaha27</li>
        <li>hahaha28</li>
        <li>hahaha29</li>
        <li>hahaha30</li>
        <li>hahaha31</li>
        <li>hahaha32</li>
        <li>hahaha33</li>
        <li>hahaha34</li>
        <li>hahaha35</li>
        <li>hahaha36</li>
        <li>hahaha37</li>
        <li>hahaha38</li>
        <li>hahaha39</li>
        <li>hahaha40</li>
        <li>hahaha41</li>
        <li>hahaha42</li>
        <li>hahaha43</li>
        <li>hahaha44</li>
        <li>hahaha45</li>
        <li>hahaha46</li>
        <li>hahaha47</li>
        <li>hahaha48</li>
        <li>hahaha49</li>
        <li>hahaha50</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/components/common/bscroll/BScroll'
export default {
  name: '',
  data() {
    return {

    }
  },
  mounted() {

  },
  components: {
    Scroll,
  },
  methods: {
    clickBtn() {
      console.log("aaa");
    }
  }
}
</script>

<style scoped>
.content {
  overflow: hidden;
  height: 300px;
}
</style>
