<template>
    <div class="radio">
        <v-header></v-header>
        <div class="wrapper">
            <div class="row">
                <input type="radio" id="male" name="gender" value="male" v-model="gender"/>
                <label for="male">Male</label>
                <br/>
                <input type="radio" id="female" name="gender" value="female" v-model="gender"/>
                <label for="female">Female</label>
                <h1>Gender: {{gender}}</h1>
            </div>
        </div>
    </div>
</template>

<script>
import header from '@/components/layout/header'
export default {
    name: 'radio',
    components: { 'v-header': header },
    data() {
        return {
            gender:""
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/common/common";

.row {
    input[type="radio"] {
        opacity: 0;
        width: 0;
        margin: 0;
        &:checked + label[for="male"],
        &:checked + label[for="female"] {
            background-position: 0 0;
            color: rgba(192, 57, 43,1.0);
        }
    }
    label[for="male"], label[for="female"] {
        background: url(../assets/images/checks.png) no-repeat;
        background-position: 0 -32px;
        padding-left: 26px;
        line-height: 24px;
        cursor: pointer;

    }
}
</style>
