<template>
    <el-select v-model="selectList"
               v-bind="$attrs"
    >
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
</template>

<script>

    export default {
        name: 'WidgetRemoteSelect',
        inject: ['params'],
        props: {
            value: {
                default: null,
                type: null
            },
            method: {
                type: String,
                default: 'get'
            },
            url: {
                type: String,
                default: ''
            },
            // params: {
            //     type: Array,
            //     default: () => []
            // },
            headers: {
                type: Object,
                default: () => {}
            },
            labelKey: {
                type: String,
                default: 'label'
            },
            valueKey: {
                type: String,
                default: 'value'
            },
            autoLoad: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                options: []
            };
        },
        computed: {
            selectList: {
                get() {
                    return this.value;
                },
                set(value) {
                    this.$emit('input', value);
                }
            }
        },
        watch: {
            params: {
                deep: true,
                handler() {
                    this.loadData();
                }
            }
        },
        mounted() {
            if (this.autoLoad) {
                this.loadData();
            }
        },
        methods: {
            async loadData() {
                const opt = {
                    url: this.url,
                    method: this.method,
                };
                // 配置params
                if (this.params) {
                    opt.params = this.params;
                }

                // 配置headers
                const headers = {};
                Object.keys(this.headers).forEach((key) => {
                    headers[key] = this.headers[key];
                });
                opt.headers = headers;

                const res = await this.$http(opt) || [];
                this.options = res.map(item => ({
                    label: item[this.labelKey],
                    value: item[this.valueKey]
                }));
            }
        }
    };
</script>

<style scoped>

</style>
