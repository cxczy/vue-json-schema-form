/**
 * Created by Liu.Jun on 2019/9/29 19:01.
 */

import genSchema from '../genSchema.js';

const viewSchema = {
    title: '单选类型',
    type: 'string'
};

const RequestSelectOptionsSchema = {
    // enum: {
    //     title: '配置选项值',
    //     type: 'array',
    //     minItems: 1,
    //     'ui:showIndexNumber': true,
    //     default: ['1', '2', '3'],
    //     items: {
    //         title: '选项值',
    //         type: 'string'
    //     }
    // }
};

export {
    RequestSelectOptionsSchema
};

export default {
    viewSchema,
    propsSchema: genSchema({
        options: {
            type: 'object',
            title: '选项',
            required: [],
            properties: {
                uiOptions: {
                    type: 'object',
                    properties: {
                        widget: {
                            title: '渲染组件',
                            type: 'string',
                            default: 'RequestSelectWidget',
                            enum: [
                                'RequestSelectWidget',
                            ],
                            enumNames: [
                                'RequestSelectWidget'
                            ]
                        },
                        url: {
                            title: '接口地址',
                            type: 'string'
                        },
                        autoLoad: {
                            title: '是否自动加载',
                            type: 'boolean',
                            default: true
                        },
                        headers: {
                            type: 'object',
                            properties: {
                                operateId: {
                                    title: '操作ID',
                                    type: 'string'
                                }
                            }
                        }
                    }
                },
                schemaOptions: {
                    type: 'object',
                    properties: RequestSelectOptionsSchema
                }
            },
        }
    })
};
