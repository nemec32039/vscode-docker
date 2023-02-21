/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { withNamedArg } from '../../utils/commandLineBuilder';
import { DockerListContainerRecordFormat } from './DockerListContainerRecord';

export const withDockerJsonFormatArg = withNamedArg('--format', '{{json .}}');

export const withDockerContainerJsonFormatArg = withNamedArg('--format', DockerListContainerRecordFormat);
