<template>
	<div class="page-wrapper">
		<div class="compRow">
			<div class="compColumn-left">
					<div class="picHolder">
						<img class="pic" src="..\assets\sudheer.webp" />
					</div>
					<div v-if="member.wasApprentice" class="badge"><img class="badge-image" src="..\assets\AppBadge.png" />

					</div>
				
			</div>
			<div class="compColumn-right">
				<div class="details">
					<h1 class="detailsFullName">{{ member.firstName }} {{ member.lastName }}</h1>
					<h2 v-if="member.pronouns != null" class="pronouns">({{ member.pronouns }})</h2>
					<h3 class="detailsTitle">{{ member.title }}</h3>
					<h6 class="startYear">{{ member.firstName }} joined SnapIT in {{ member.startYear }}.</h6>
					<h6 v-if="member.jobLikes != 'Did not answer.'" class="jobLikes">{{ member.jobLikes }}</h6>
				</div>
			</div>
		</div>
		<div class="lowerInfo">
			<div v-if="member.interests != 'Did not answer.'" class="interests">
				<h1 class="hobby">Hobbies and Interests</h1>
				<h5 class="hobbyData">{{ member.interests }}</h5>
			</div>
		</div>
		<div class="icons">
			<div v-if="member.linkedin != null">
				<a :href="'https://www.linkedin.com/in/' + member.linkedin">
				<img class="socialLink" src="..\assets\LinkedIn.webp"> </a>
			</div>
			<div v-if="member.github != null">
				<a :href="'https://github.com/' + member.github">
				<img class="socialLink" src="..\assets\GitHub.webp"> </a>
			</div>
			<div v-if="member.instagram != null">
				<a :href="'https://www.instagram.com/' + member.instagram">
				<img class="socialLink" src="..\assets\Insta.webp"> </a>
			</div>
			<div v-if="member.youtube != null">
				<a :href="'https://www.youtube.com/' + member.youtube">
				<img class="socialLink" src="..\assets\YouTube.webp"> </a>
			</div>
			<div v-if="member.personal != null">
				<a :href="member.personal">
				<img class="socialLink" src="..\assets\Link.webp"> </a>
			</div>
        </div>
	</div>
</template>

<script>
import { UserService } from "@/services/UserServices";

export default {
	name: "DetailsComponent",

	data: function() {
		return {
			loading: false,
			member: {},
			errorMessage: null
		};
	},

	created: async function() {
		let memberId = this.$route.params.memberId;

		try {
			this.loading = true;
			let response = await UserService.getMembers(memberId);
			console.log(response.data)
			this.loading = false;
			console.log(response.data);
			this.member = response.data;
		} catch (error) {
			this.loading = false;
			this.errorMessage = error;
		}
	},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");


.compRow {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	align-items: flex-start;
}

.compColumn-left {
	display: flex;
	flex-direction: column;
	flex-basis: 100%;
	flex: 1;
    margin-left: 7%;
}

.compColumn-right {
	display: flex;
	flex-direction: column;
	flex-basis: 100%;
	flex: 1;
}

.picHolder {
	width: 70%;
	margin-right: auto;
	margin-left: 10%;
	margin-top: 20%;
}

.pic {
	width: 100%;
	min-width: 190px;
	margin-right: auto;
	border-radius: 10px;
	box-shadow: -20px 20px 10px #c3e2ff;
}

.badge {
	
	margin-left: 60%;
	margin-top: -22%;
	
	/* height: auto;
	width: 20px; */
	/* margin-top: -23%;
	padding-left: 68%;
	z-index: 1; */
}

.badge-image {
    height: auto;
	width: 60%;
}

.details {
	width: 70%;
	min-width: 185px;
	margin-right: 10%;
	margin-left: auto;
	margin-top: 35%;
	
	justify-content: left;

}

.detailsFullName {
	font-size: 35px;
	font-weight: 600;
	font-style: normal;
	font-family: poppins;
	color: #0679be;
	line-height: 27px;
	margin-bottom: 10px;
	margin-top: 0px;
}

.interests {
	display: flex;
	flex-direction: column;
	color: black;
	font-family: poppins, sans-serif;
	width: 100%;
	margin-top: 5%;
	justify-content: center;
}

.lowerInfo {
	display: flexbox;
	flex-direction: column;
	justify-content: center;
	width: 100%;
}

.pronouns {
	font-size: 24px;
	font-family: poppins;
	font-weight: 600;
	line-height: 28px;
	margin-top: 0px;
	padding-bottom: 5px;
}

.detailsTitle {
	font-weight: 600;
	font-size: 18px;
	line-height: 27px;
	font-family: poppins;
	margin-bottom: 0px;
	color: gray;
}

.startYear {
	font-family: Poppins;
	font-weight: 600;
	font-size: 17px;
	line-height: 23px;
	color: gray;
	margin-top: 5px;
	margin-bottom: 0px;
}

.jobLikes {
	font-family: open-sans;
	font-weight: 400;
	font-size: 17px;
	font-stretch: 15%;
	line-height: 26px;
	color: #111111;
	margin-top: 25px;
	padding-right: 20%;
	justify-content: left;
}

.hobby {
	padding-left: 15%;
	width: 70%;
	font-family: poppins;
	font-weight: 600;
	font-size: 18px;
	line-height: 27px;
	color: #1b1b1b;
	text-align: center;
	margin-bottom: 0px;
}

.hobbyData {
	padding-left: 15%;
	width: 70%;
	font-family: open-sans;
	font-weight: 400;
	font-size: 17px;
	line-height: 26px;
	font-stretch: 15%;
	color: #111111;
	margin-top: 20px;
	margin-bottom: 0px;
	text-align: center;
}

.icons {
	display: flex;
	flex-direction: row;
	height: auto;
	width: 40%;
	padding-left: 30%;
	padding-bottom: 50px;
	justify-content: center;
	margin-top: 30px;
}

.socialLink {
    height: auto;
    width: 50px;
    padding-left: 15px;
    padding-right: 15px;
}
</style>
