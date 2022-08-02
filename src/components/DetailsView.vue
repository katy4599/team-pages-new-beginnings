<template>
	<div>
		<DetailsBanner />
		<DetailsComponent />
		<FooterComponent />
	</div>
</template>

<script setup>
import DetailsBanner from "@/components/DetailsBanner";
import FooterComponent from "@/components/FooterComponent";
import DetailsComponent from "@/components/DetailsComponent";
</script>

<script>
export default {
	name: "App",
};
</script>

<style></style>
