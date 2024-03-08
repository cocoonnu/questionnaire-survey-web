import { create } from 'zustand'
import { HEADER_MENU_KEY, WORK_AREA_KEY, TEMPLATE_KEY } from '../consts'

export interface LayoutStore {
  headerMenuKey: HEADER_MENU_KEY
  workingAreaKey: WORK_AREA_KEY
  templateLibraryKey: TEMPLATE_KEY
  /** 监听路径变化，动态更新状态 */
  monitorPathChange: (pathName: string) => void
}

export const useLayoutStore = create<LayoutStore>((set) => ({
  headerMenuKey: HEADER_MENU_KEY.workingArea,
  workingAreaKey: WORK_AREA_KEY.systemHome,
  templateLibraryKey: TEMPLATE_KEY.questionnaireSurvey,

  monitorPathChange: (pathName) => {
    const path = pathName.match(/\/([^/]+)$/)?.[1] as any
    if (Object.values(WORK_AREA_KEY).includes(path)) {
      // 跳转到工作区指定path
      set({
        headerMenuKey: HEADER_MENU_KEY.workingArea,
        workingAreaKey: path,
      })
    }
    if (Object.values(TEMPLATE_KEY).includes(path)) {
      // 跳转到模板库指定path
      set({
        headerMenuKey: HEADER_MENU_KEY.templateLibrary,
        templateLibraryKey: path,
      })
    }
  },
}))
