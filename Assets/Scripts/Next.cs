using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Next : MonoBehaviour
{
    public GameObject NextLevel;
    public GameObject Sheep_Demo;
    public void ToggleNext()
    {
        NextLevel.SetActive(false);
    }
	public void MoveToLevelTwo() {
	SceneManager.LoadScene("Level_2");
	}
}
