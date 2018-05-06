<style>

	.dialog-content .toolbar{
		width: 60px;
		text-align: center;
	}

	.dialog-content .shape-icon{
		padding: 10px;
		cursor: pointer;
		color: #333;
	}

	.dialog-content .icon-border{
		color: #673ab7;
		/* border: 1px solid #673ab7; */
	}

	/* .dialog-content i[title='直线工具']{
		transform: rotate(-45deg) scale(1.8);
	} */

	.dialog-content{
		user-select: none;
		position: absolute;
		box-shadow: none;
		transition: none;
		overflow: hidden;
		left: -4px;
		top: 60px;
	}

	

</style>
<template>
	<v-dialog 
		ref="dialog"
		:hide-overlay="true"
		persistent
		transition="false"
		content-class="dialog-content"
		v-model="showDialog" width="60">
      
		<div class="toolbar">
				<v-subheader 
					@mousedown="onHeaderMouseDown"
					@dblclick="onHeaderDoubleClick"
					:style="{height:'20px', cursor: 'move'}">
					<v-icon :title="'可拖拽/双击'">drag_handle</v-icon>
				</v-subheader>
				<div ref="iconContainer" class="icon-container">
				<v-icon 
					:title="item.tip"
					v-for="item in iconsData" 
					:key="item.shapeType"
					@click="onIconClick(item)"
					:class="{
						'shape-icon':true,
						'icon-border': selectedShape==item.shapeType
					}">
					
					{{item.iconName}}
					
				</v-icon>
				</div>
		</div>
    </v-dialog>
</template>
<script>

	import {ToolbarMediator} from './ToolbarMediator';

	export default {
		name: 'Toolbar',
		beforeCreate(){
			new ToolbarMediator(this);
		}
	}
</script>
