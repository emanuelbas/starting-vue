<template>
	<div>
		<ul class="list-group">

			<li v-for="item of frutas" class="list-group-item d-flex justify-content-between align-items-center" :key="item.id">
				{{item.nombre}}
				<span class="badge badge-primary badge-pill">{{item.cantidad}}</span>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	import {mapState} from 'vuex';
	export default {
		name: 'Lista',
		computed:{
			...mapState(['frutas'])
		}
	}
</script>