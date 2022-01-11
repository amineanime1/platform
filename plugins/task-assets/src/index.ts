//
// Copyright © 2020 Anticrm Platform Contributors.
// 
// Licensed under the Eclipse Public License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. You may
// obtain a copy of the License at https://www.eclipse.org/legal/epl-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// 
// See the License for the specific language governing permissions and
// limitations under the License.
//

import { addStringsLoader, loadMetadata } from '@anticrm/platform'
import task, {taskId} from '@anticrm/task'

const icons = require('../assets/icons.svg')
loadMetadata(task.icon, {
  Task: `${icons}#task`,
  Kanban: `${icons}#kanban`,
  TodoCheck: `${icons}#todo-check`,
  TodoUnCheck: `${icons}#todo-uncheck`,
  ManageStatuses: `${icons}#manage-statuses`,
  TaskState: `${icons}#task-state`
})

addStringsLoader(taskId, async (lang: string) => await import(`../lang/${lang}.json`))
