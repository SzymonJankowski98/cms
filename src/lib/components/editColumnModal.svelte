<script lang="ts">
	import { faBars, faNoteSticky, faSquare, faIdCard } from '@fortawesome/free-solid-svg-icons';
	import Modal from '$lib/components/modal.svelte';

	import { EditColumnModalStore, EDIT_DETAILS, hideModal, TYPE_PICKER } from '$lib/editColumnModalStore';
	import ColumnTypeCard from '$lib/components/columnTypeCard.svelte';
	import { EMPTY, TEXT, NAV, CARDS } from '$lib/pageEditor';
	import EditColumnDetails from './editColumnDetails.svelte';
</script>

{#if $EditColumnModalStore.visible}
	<Modal on:close={hideModal} title="Pick block type">
		{#if $EditColumnModalStore.mode === TYPE_PICKER}
			<div class="grid grid-cols-3 gap-8 m-4">
				<ColumnTypeCard type={EMPTY} icon={faSquare}/>
				<ColumnTypeCard type={TEXT} icon={faNoteSticky}/>
				<ColumnTypeCard type={NAV} icon={faBars}/>
				<ColumnTypeCard type={CARDS} icon={faIdCard}/>
			</div>
		{:else if $EditColumnModalStore.mode === EDIT_DETAILS}
			<EditColumnDetails/>
		{/if}
	</Modal>
{/if}
