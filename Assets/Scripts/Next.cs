using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Next : MonoBehaviour
{
    public GameObject NextLevel;
    public GameObject Sheep_Demo;
    public void ToggleNext()
    {
        NextLevel.SetActive(false);
    }
}
