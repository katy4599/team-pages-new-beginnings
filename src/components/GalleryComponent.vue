<template>
	<div class="page-box">
		<span class="gallery-intro">
			Every player must be committed to the game plan without deviation
			and work together to make it a win. Commit to the greater goal.
			Always have the team's best interest in mind.
		</span>
		<div class="card" v-for="member of members" :key="member.id">
			<router-link :to="'/details/' + member.id" 
				><div class='blue-box'><img
					class="shane"
					src="@/assets/sudheer.webp"
					alt="avatar"
					style="width: 100%"
			/></div></router-link>
			<div class="nameAndTitle">
				<h4 class="memName">
					<b>{{ member.firstName }}</b>
				</h4>
				<h4 class="memTitle">{{ member.title }}</h4>
			</div>
		</div>
	</div>

</template>

<script>
import { UserService } from "@/services/UserServices";

export default {
	name: "GalleryComponent",
	data() {
		return {
			loading: false,
			members: [],
			errorMessage: null,
		};
	},

	created: async function () {
		try {
			this.loading = true;
			let response = await UserService.getAllMembers();
			this.loading = false;
			this.members = response.data;
		} catch (error) {
			this.loading = false;
			this.errorMessage = error;
		}
	},

	/*computed: {
		sortedArray() {
			let sortedMembers = this.members;
			sortedMembers = sortedMembers.sort((a,b) => {
				let fa = a.firstName.toLowerCase(), fb = b.firstName.toLowerCase();
				if (fa < fb) {
					return -1
				}
				if (fa > fb) {
					return 1
				}
				return 0
				})
		}
	}*/
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

.page-box {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 20px;
	padding-left: 10%;
	padding-right: 10%;
	padding-bottom: 10%;
	font-family: "Poppins", sans-serif;
}

.gallery-intro {
	width: 100%;
	text-align: center;
	padding-top: 10vh;
	padding-bottom: 5vh;
	font-size: 28px;
}

.card {
	transition: 0.3s;
	width: 300px;

}

.shane {
	transition: 0.3s;
	width: 100%;
	opacity: 0.95;
}
.shane:hover{
	transform: scale(1.09);
	opacity: 1;
}

.nameAndTitle {
	text-align: center;
}

.memName {
	font-size: 18px;
	margin-top: 5px;
	margin-bottom: 0;
}

.memTitle {
	font-size: 16px;
	font-weight: 600;
	color: gray;
	margin-top: 1px;
	margin-bottom: 0;
}

.blue-box{
	width: 300px;
	height: 300px;
	overflow: hidden;
	border-radius: 10px;
	background-color: blue;
}

</style>
