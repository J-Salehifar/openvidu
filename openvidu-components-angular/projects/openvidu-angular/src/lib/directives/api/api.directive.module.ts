import { NgModule } from '@angular/core';
import { LogoDirective } from './internals.directive';
import { ParticipantPanelItemMuteButtonDirective } from './participant-panel-item.directive';
import {
	StreamDisplayParticipantNameDirective,
	StreamDisplayAudioDetectionDirective,
	StreamSettingsButtonDirective
} from './stream.directive';
import {
	ToolbarScreenshareButtonDirective,
	ToolbarFullscreenButtonDirective,
	ToolbarLeaveButtonDirective,
	ToolbarParticipantsPanelButtonDirective,
	ToolbarChatPanelButtonDirective,
	ToolbarDisplaySessionNameDirective,
	ToolbarDisplayLogoDirective,
	ToolbarActivitiesPanelButtonDirective,
	ToolbarBackgroundEffectsButtonDirective
} from './toolbar.directive';
import {
	AudioMutedDirective,
	MinimalDirective,
	PrejoinDirective,
	VideoMutedDirective,
	ParticipantNameDirective
} from './videoconference.directive';


@NgModule({
	declarations: [
		MinimalDirective,
		PrejoinDirective,
		VideoMutedDirective,
		AudioMutedDirective,
		ToolbarScreenshareButtonDirective,
		ToolbarFullscreenButtonDirective,
		ToolbarBackgroundEffectsButtonDirective,
		ToolbarLeaveButtonDirective,
		ToolbarParticipantsPanelButtonDirective,
		ToolbarChatPanelButtonDirective,
		ToolbarActivitiesPanelButtonDirective,
		ToolbarDisplaySessionNameDirective,
		ToolbarDisplayLogoDirective,
		StreamDisplayParticipantNameDirective,
		StreamDisplayAudioDetectionDirective,
		StreamSettingsButtonDirective,
		LogoDirective,
		ParticipantPanelItemMuteButtonDirective,
		ParticipantNameDirective
	],
	exports: [
		MinimalDirective,
		PrejoinDirective,
		VideoMutedDirective,
		AudioMutedDirective,
		ToolbarScreenshareButtonDirective,
		ToolbarFullscreenButtonDirective,
		ToolbarBackgroundEffectsButtonDirective,
		ToolbarLeaveButtonDirective,
		ToolbarParticipantsPanelButtonDirective,
		ToolbarChatPanelButtonDirective,
		ToolbarActivitiesPanelButtonDirective,
		ToolbarDisplaySessionNameDirective,
		ToolbarDisplayLogoDirective,
		StreamDisplayParticipantNameDirective,
		StreamDisplayAudioDetectionDirective,
		StreamSettingsButtonDirective,
		LogoDirective,
		ParticipantPanelItemMuteButtonDirective,
		ParticipantNameDirective
	]
})
export class ApiDirectiveModule {}
